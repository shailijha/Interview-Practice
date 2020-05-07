function htmlEndTagByStartTag(startTag) {
    let tag = startTag.slice(startTag.indexOf('<')+1, startTag.indexOf(' '));
    return `</${tag}>`;
}
