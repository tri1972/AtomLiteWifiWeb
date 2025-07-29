using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using System;
using System.IO;
using System.Threading.Tasks;

public class StorageAccountHelper
{
    private static string connectionString;//接続文字列
    private static string blobContainerName = "environment";//"コンテナ名";

    // 渡されたbloblNameへのアクセスを行うBlobClientを作成する
    private static BlobClient CreateBlobClient(string blobName)
    {
        connectionString = System.Environment.GetEnvironmentVariable("AzureConnectionString");
        return new BlobClient(connectionString, blobContainerName, blobName);
    }
    
    // ファイルダウンロード
    public static async Task<FileInfo> DownloadAsync(string fileName)
    {
        BlobClient blobClient = CreateBlobClient(fileName);
        
        // ファイル名が一致するものがあるかどうかを確認
        Azure.Response<bool> isBlobExists = await blobClient.ExistsAsync();
        if (!isBlobExists.Value)
        {
            throw new Exception("ファイルが見つかりません。");
        }

        // ファイルをダウンロードする
        Azure.Response<BlobDownloadResult> blobDownloadResult = await blobClient.DownloadContentAsync();
        if (blobDownloadResult.GetRawResponse().IsError)
        {
            throw new Exception("ファイルのダウンロードに失敗しました。");
        }

        // ファイルのデータを取り出して返す
        FileInfo fileInfo = new FileInfo();
        fileInfo.content = blobDownloadResult.Value.Content.ToArray();
        fileInfo.contentType = blobDownloadResult.Value.Details.ContentType;
        return fileInfo;
    }

    // ファイルアップロード
    public static async Task UploadAsync(MemoryStream fileStream, string fileName)
    {
        BlobClient blobClient = CreateBlobClient(fileName);
        BlobHttpHeaders blobHttpHeaders = new BlobHttpHeaders() {
            ContentType = GetContentType(fileName)
        };
        // !ATTENTION! 同名のファイルがあった場合、上書きする処理です。
        await blobClient.UploadAsync(fileStream, blobHttpHeaders);
    }

    // ファイルの拡張子を元にMIMEタイプを返す
    private static string GetContentType(string filename)
    {
        switch (Path.GetExtension(filename).ToLower())
        {
            // Text
            case ".txt":
                return "text/plain";
            // Image
            case ".pdf":
                return "application/pdf";
            case ".jpg":
            case ".jpeg":
                return "image/jpeg";
            case ".png":
                return "image/png";
            // Zip
            case ".zip":
                return "application/zip";
            // Others
            default:
                return "";
        }
    }

    // ファイル削除
    public static async Task DeleteAsync(string fileName)
    {
        BlobClient blobClient = CreateBlobClient(fileName);
        
        // ファイル名が一致するものがあるかどうかを確認
        Azure.Response<bool> isBlobExists = await blobClient.ExistsAsync();
        if (isBlobExists.Value)
        {
            // ファイルがある場合のみ削除を行う
            await blobClient.DeleteAsync();
        }
    }
}

// ダウンロードしたファイル情報を返すクラス
public class FileInfo
{
    // ファイルデータのバイト配列
    public byte[] content { get; set; }
    public string contentType { get; set; }
}

