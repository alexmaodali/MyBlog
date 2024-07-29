```
let mapleader = " "

" Basic Settings
set scrolloff = 10
set incsearch
set hlsearch
set number
set keep-english-in-normal

nnoremap H ^
nnoremap L $

nnoremap <leader>u viw~<Esc>
noremap u ~

"Instead of CapsLock in AutoHotKey
imap jj <Esc>


" use whichkey
set which-key
set notimeout
" show whichkey panel sure to have installed which-key plugin in idea
let g:WhichKeyDesc_LeaderKeyMap = "<leader>"

" c-------------------------------------------------------------------------
" leader ca -> close all editors
let g:WhichKeyDesc_CodeAndClose_CloseAllEditors = "<leader>ca 关闭所有标签"
nmap <leader>ca <action>(CloseAllEditors)

" leader cd -> close current editors
let g:WhichKeyDesc_CodeAndClose_CloseEditors = "<leader>cd 关闭当前标签"
nmap <leader>cd :action CloseEditor<CR>

" leader co -> close other tabs
let g:WhichKeyDesc_CodeAndClose_CloseAllEditorsButActive = "<leader>co 关闭其他标签页"
nmap <leader>co <action>(CloseAllEditorsButActive)


" e-------------------------------------------------------------------------
" leader e -> explorer
let g:WhichKeyDesc_ToggleExplorerOrExtract = "<leader>e Open the Explorer"
nmap <leader>e <action>(ActivateProjectToolWindow)


" f-------------------------------------------------------------------------
let g:WhichKeyDesc_FindOrFormat = "<leader>f 查找/格式化文件"

"let g:WhichKeyDesc_FindOrFormat_FindFile = "<leader>ff 查找文件"
"nmap <leader>ff <action>(Find)

let g:WhichKeyDesc_FindOrFormat_FindFileLocation = "<leader>fl 在Explorer中定位文件"
nmap <leader>fl <action>(SelectInProjectView)



" g-------------------------------------------------------------------------
" self-supported key-> gd -<< go to definition
let g:WhichKeyDesc_AutoCompletion = "<leader>g 自动生成代码"

let g:WhichKeyDesc_AutoCompletion_GenerateGetters = "<leader>gg Generate Getters"
nmap <leader>gg :action GenerateGetter<CR>

let g:WhichKeyDesc_AutoCompletion_GenerateSetters = "<leader>gs Generate Setters"
nmap <leader>gs :action GenerateSetter<CR>

let g:WhichKeyDesc_AutoCompletion_GenerateGettersAndSetters = "<leader>ga Generate Getters And Setters"
nmap <leader>ga <action>(GenerateGetterAndSetter)

let g:WhichKeyDesc_AutoCompletion_GenerateEqualsAndHashCode= "<leader>ge Generate Equals And HashCode"
nmap <leader>ge <action>(GenerateEquals)

let g:WhichKeyDesc_AutoCompletion_GenerateToString = "<leader>gt Generate ToString"
nmap <leader>gt <action>(Actions.ActionsPlugin.GenerateToString)


" window-------------------------------------------------------------------------

" 窗口的拆分
let g:WhichKeyDesc_Windows = "<leader>w Window Operation"
let g:WhichKeyDesc_WindowOperation_SplitWindow = "<leader>ws Split Window"

let g:WhichKeyDesc_WindowOperation_SplitWindowDown = "<leader>wsj Split Window Down"
nmap <leader>wsj <action>(MoveTabDown)

let g:WhichKeyDesc_WindowOperation_SplitWindowRight = "<leader>wsl Split Window Right"
nmap <leader>wsl <action>(MoveTabRight)

" 窗口的跳动
let g:WhichKeyDesc_WindowJump = "<leader>j 向下跳转"
nmap <leader>j <c-w>j

let g:WhichKeyDesc_WindowJump = "<leader>k 向上跳转"
nmap <leader>k <c-w>k

let g:WhichKeyDesc_WindowJump = "<leader>l 向右跳转"
nmap <leader>l <c-w>l

let g:WhichKeyDesc_WindowJump = "<leader>h 向左跳转"
nmap <leader>h <c-w>h

let g:WhichKeyDesc_Windows_UnSplitAll = "<leader>wa 取消所有Split窗口"
nmap <leader>wa <action>(UnsplitAll)

let g:WhichKeyDesc_Windows_CloseCurrentSplitWindow = "<leader>wc 关闭当前Split窗口"
nmap <leader>wc <c-w>c

let g:WhichKeyDesc_Windows_UnSplitCurrentWindow = "<leader>wu 取消拆分当前分割Split窗口"
nmap <leader>wu <action>(Unsplit)

" window-------------------------------------------------------------------------

```
