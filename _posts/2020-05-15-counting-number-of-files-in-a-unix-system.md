---
layout: single
title: Counting Number of Files/Folders in a Unix/Linux System Directory
---
{: .text-justify}
There are times when we want to count the number of the files or folders in a directory. We can use the below trick to get that information. 

### Command
```
ls -1 | wc -l
```

### Explantion
{: .text-justify}
The ```ls``` command will **lists** all the files/folders in the current directory. When ```-1``` is added to the option, it lists the one file/folder per line as below  - 

```
> ls -1
foo.txt 
bar.txt
```

The ```wc``` command is the **word count** command in a Unix system. One of its options is ```-l```, which counts the number of lines. 

{: .text-justify}
Thus, if we pipe the above two commands, it means the output of ```ls -1``` command, which lists the files/folders in the current directory is taken as the input to the ```wc -l``` command, which counts the number of lines. Assuming ```foo.txt``` and ```bar.txt``` are the only files in the directory, the output of the above command will result as - 
```
> ls -1 | wc -l
2
```