CKEDITOR.editorConfig = function(config) {
  config.toolbarGroups = [
    { name: "document", groups: ["mode", "document", "doctools"] },
    { name: "clipboard", groups: ["clipboard", "undo"] },
    {
      name: "editing",
      groups: ["find", "selection", "spellchecker", "editing"]
    },
    { name: "forms", groups: ["forms"] },
    { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
    {
      name: "paragraph",
      groups: ["list", "indent", "blocks", "align", "bidi", "paragraph"]
    },
    { name: "links", groups: ["links"] },
    { name: "insert", groups: ["insert"] },
    "/",
    { name: "styles", groups: ["styles"] },
    { name: "colors", groups: ["colors"] },
    { name: "tools", groups: ["tools"] },
    { name: "others", groups: ["others"] },
    { name: "about", groups: ["about"] }
  ];
  config.removeButtons =
    "Source,Save,NewPage,ExportPdf,Preview,Print,Templates,Cut,Copy,Find,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,CreateDiv,Blockquote,Language,Link,Unlink,Anchor,Flash,Smiley,PageBreak,Iframe,ShowBlocks,Maximize,About,Paste,PasteText,PasteFromWord,Undo,Redo,Replace,SelectAll,CopyFormatting,RemoveFormat,Styles,Format,Font,FontSize,TextColor,BGColor,NumberedList,BulletedList,Outdent,Indent,BidiLtr,BidiRtl,Table,HorizontalRule,SpecialChar";
  config.language = "zh-cn";
  config.image_previewText = " ";
  config.exportPdf_tokenUrl = " ";
  // config.disallowedContent = 'img{width,height};img[width,height]';//强制禁用img标签的style以及widht/height属性
  config.removeDialogTabs = "html5video:advanced;image:advanced;image:Link"; //隐藏“超链接”与“高级选项”只留上传和预览按钮
  config.extraPlugins = "uploadimage,editorplaceholder";
  config.filebrowserImageUploadUrl = " "; //上传图片的服务器地址
  config.filebrowserHtml5videoUploadUrl = " "; //上传视频的服务器地址";
  config.removePlugins = "elementspath"; //隐藏左下角提示
  config.allowedContent = true; //允许所有标签
  //保证word导入格式
  config.pasteFromWordRemoveFontStyles = false;
  config.pasteFromWordRemoveStyles = false;
  //是否强制复制来的内容去除格式
  config.forcePasteAsPlainText = false; //不去除
};

