# keymap standard



basic on vim leader 



## ## Basic Demand

### leader



| +                           | +                                                   |
| --------------------------- | --------------------------------------------------- |
| LEADER                      | SPACE                                               |
| jj                          | ESC                                                 |
| H                           | 行首                                                |
| L                           | 行尾                                                |
| u                           | 大小写字母转换 ~                                    |
| leader u                    | 整个单词大小写转换 viw~                             |
|                             |                                                     |
| leader leader(Ctrl shift P) | showCommands(Idea中用shift shift \|\| ctrl shift p) |
| leader q                    | quickFind(Idea->Leadr Leader)                       |
| leader d                    | 删除一行dd                                          |
| leader y                    | 复制一行yy                                          |
| leader w                    | 复制当前光标单词yiw                                 |
| leader x                    | 删除当前光标单词bdw                                 |
| leader g                    | Go To Line                                          |
|                             |                                                     |
| leader n                    | Next Editor(Idea未实现)                             |
| leader p                    | Prev Editor(Idea未实现)                             |
|                             |                                                     |
| leader hjkl                 | Jump Bwteen Editor Groups                           |
| leader sh                   | Split Horizonally                                   |
| leader sv                   | Split Vertically                                    |
|                             |                                                     |
| leader wn(Ctrl Shift N)     | New Window(Idea未实现)                              |
| leader wc(Alt F4)           | Close Current Window(Idea未实现)                    |
|                             |                                                     |
| leader ca                   | Close All Editors                                   |

### Ctrl



| Ctrl^   | +                               |
| ------- | ------------------------------- |
| ,       | Settings                        |
|         |                                 |
| a       | Select All                      |
| b       | Toggle Explorer                 |
| c       | Copy                            |
| d       | Select Same Word                |
| f       | Find Or Replace                 |
|         |                                 |
| o       | Open A File                     |
| shift O | Open A Directory(Idea 中Ctrl o) |
| shift P | ShowCommands(Idea未实现)        |
| shift Q | 退出\|关闭项目<br>Vscode 未实现 |
| r       | Refresh                         |
| s       | Save                            |
| t       | Terminal                        |
| v       | Paste                           |
| w       | Close A Editor                  |
| x       | Cut                             |
| y       | Redo                            |
| z       | Undo                            |
|         |                                 |
| /       | Block Comment                   |
| [       | Fold                            |
| ]       | UnFold                          |
| shift [ | Fold All                        |
| shift ] | UnFold All                      |
| shift + | Zoom In(Idea中无shift)          |
| shift - | Zoom Out(Idea中无shift)         |
| shift x | Plugins \| Extensions           |

### Alt



| Alt+ | +                        |
| ---- | ------------------------ |
| /    | Line Commont             |
| f    | Format <br>Vscode 未实现 |

### Explorer



| +    | +                   |
| ---- | ------------------- |
| a    | add a new file      |
| A    | add a new directory |
| d    | delete              |
| r    | rename              |
| p    | paste               |
| c    | copy                |

Idea中仅实现a d r
