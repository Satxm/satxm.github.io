# 在 PowerShell 中创建符号链接

## 使用 PowerShell 创建符号链接

在 Windows 10（或 Windows Server 2016）中，微软在 PowerShell 中发布了一个名为 New-Item 的新命令，用于创建符号链接。

调用 New-Item cmdlet 以创建符号链接并传入项目类型 SymbolicLink。接下来，将 Link 参数替换为我们要创建的符号链接的路径（包括文件名及其扩展名）。

最后，用新链接引用的路径（相对或绝对）替换 Target 部分。

```poershell
New-Item -ItemType SymbolicLink -Path "Link" -Target "Target"
```

你还可以使用 PowerShell 创建目录连接和硬链接，我们将在本文的下一节中讨论这些内容。

## 使用 PowerShell 创建目录连接

我们首先要了解什么是链接，什么是目录联结，什么时候使用。

Directory Junction 是一种较旧的符号链接类型，在 Windows 2000 和更高版本的基于 NT 的 Windows 系统中不支持 UNC 路径。

但是，首选选项是符号目录链接，该链接支持 UNC 和比 Windows Vista 更新的计算机的相对路径。

在 PowerShell 中创建目录联结时适用确切的过程。我们必须用 Junction 替换 ItemType 值。

```poershell
New-Item -ItemType Junction -Path "Link" -Target "Target"
```

## 使用 PowerShell 创建硬链接

与我们之前的方法相同，我们需要将 ItemType 值替换为 HardLink。

```poershell
New-Item -ItemType HardLink -Path "Link" -Target "Target"
```

硬链接比目录连接有更多的限制。除了不支持 UNC 路径之外，我们只能为文件创建硬链接，而不能为文件夹创建硬链接。