---
title: "Getting the Total Number of Files/Folders in a Unix/Linux System Directory"
category: "Unix"
date: "2020-05-15"
readTime: "1 min read"
excerpt: "A quick command-line trick to count the number of files or folders in any directory using ls and wc."
status: "published"
---

There are times when we want to count the number of the files or folders in a directory. We can use the below trick to get that information.

## Command

```bash
ls -1 | wc -l
```

## Explanation

The `ls` command will **list** all the files/folders in the current directory. When `-1` is added to the option, it lists one file/folder per line as below:

```bash
ls -1
foo.txt
bar.txt
```

The `wc` command is the **word count** command in a Unix system. One of its options is `-l`, which counts the number of lines.

Thus, if we pipe the above two commands, the output of `ls -1` command (which lists the files/folders in the current directory) is taken as the input to the `wc -l` command (which counts the number of lines). Assuming `foo.txt` and `bar.txt` are the only files in the directory, the output of the above command will result as:

```bash
ls -1 | wc -l
2
```
