# 文件与 Base64 相互转换

```powershell
function ConvertTo-Base64 {
    param (
        [Parameter(Mandatory=$true)]
        [string]$InputFile,
        [Parameter(Mandatory=$true)]
        [string]$OutputFile
    )

    # $f=[io.file]::ReadAllBytes($InputFile)
    $f = Get-Content -Path $InputFile -Encoding Byte
    # $f = Get-Content -Path $InputFile -AsByteStream # PS 7+
    $base64 = [Convert]::ToBase64String($f)
    Set-Content -Path $OutputFile -Value $base64
    # [io.file]::WriteAllText($OutputFile,$base64)
}

function ConvertTo-File {
    param (
        [Parameter(Mandatory=$true)]
        [string]$InputFile,
        [Parameter(Mandatory=$true)]
        [string]$OutputFile
    )

    # $f=[io.file]::ReadAllText($InputFile) # [Text.Encoding]::UTF8,[Text.Encoding]::GetEncoding("GB2312")
    $f = Get-Content -Path $InputFile
    $bytes = [Convert]::FromBase64String($f)
    Set-Content -Path $OutputFile -Value $bytes -Encoding Byte
    # Set-Content -Path $OutputFile -Value $bytes -AsByteStream # PS 7+
    # [io.file]::WriteAllBytes($OutputFile,$bytes)
}

# Usage
# ConvertTo-Base64 -InputFile 'C:\MyFolder\file.exe' -OutputFile 'C:\MyFolder\base64.txt'
# ConvertTo-File -InputFile 'C:\MyFolder\base64.txt' -OutputFile 'C:\MyFolder\file.exe'

```