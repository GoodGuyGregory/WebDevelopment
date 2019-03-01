# Markdown Basics

## Headlines, Paragraphs, and Basic Formatting

### Headlines

#### Headline Level 4

##### Headline Level 5

###### Headline Level 6

### Paragraphs and Line Breaks

We create paragraphs by typing the way we would in any other program. Just hit return twice to start another paragraph.

//two space technique requires two spaces then a click of enter/return  

I love you without Knowing how, or when, or  
from where  
I love you directly without problems or pride:  
I love you like this because I don't know any  
other way to love

Neruda, Pablo "Sonnet 17" The Poetry of Pablo Neruda

### Emphasis and Bolding

#### Italics

This *works* and this _works_ too.  
in Python the *_* is used alot so a way to make it standout helps.

#### Bolding

this **works**, and this __works__ too.  

be consistent throughout a document.

#### Using Both

This ***works***, and this ___works___

### Blockquotes

> Markdown is intended to be easy-to-read  
and easy-to-write as is feasible.
>
> Readability, however, is emphasized above all else. A Markdown-formatted document should be publishable as-is, as plain text, without looking like it's been marked up with tags or formatting instructions.  - [John Gruber](https://daringfireball.net/ "Creator of Markdown")

### Horizontal Rule

created with underscore hyphens or asterisk

____

---

***

## Lists

### Numbered Lists

1. Item 1
2. Item 2

 ***Notice*** Numbers do not need to be in order or even chronological


1. Nested List Example Item 1
    1. Nested Item 1
    2. Nested Item 2

### Bulleted Lists

* Bulleted Item
* Bulleted Item

* Item  
    * Nested Bulleted Item  
      * Nested Bulleted Item
***

## Code

Format code using the back tick character usually on the Tilda key  

***Example***  
to install the latest version of NPM, you can type, `npm install npm@latest -g`  

```  
let exampleFunction = () =>{
  let foo = 'foo';
  let bar = 'bar';

  return foo + bar;

}  
```
***Example***  
if code language is added after the first set of back ticks it will format the code block for that specific language's syntax

```JS  
let exampleFunction = () =>{
  let foo = 'foo';
  let bar = 'bar';

  return foo + bar;

}  
```

___  

## Links

Links are added to mark down with ***square brackets***  
 [link_name] (destination.com)  

 [YouTube](https://youtube.com)  
 [Facebook](https://facebook.com)   
 [Amazon](https://amazon.com)

 A title can be added to while in hover state in by including  
  a set of "sample title text"  

 [GitHub](https://GitHub.com "Link to GitHub")  

 Footnote references to bottom or top  of pages  

[Github][1]  

[1]: https://github.com "Reference Link to Github"

---  

## Images

Images are referenced just like links in markdown.  
The image must be hosted somewhere and then referenced  
to that location.

  ***Example***  
  Check out this dope eye candy poster from shopify of Samurai Jack.  

![Samurai Jack](https://cdn.shopify.com/s/files/1/0558/2081/products/Samurai_TomWhalen_Regular_1024x1024.jpg?v=1500485901)

***Example***  
Scope the Gorillaz image below! You know I'm obsessed  

![Gorillaz](https://consequenceofsound.files.wordpress.com/2017/04/screen-shot-2017-04-27-at-3-13-54-pm.png)

***Example***  
This image can be clicked and leads you to the Ableton site.  

[![Studio](https://cdn-resources.ableton.com/80bA26cPQ1hEJDFjpUKntxfqdmG3ZykO/static/images/og-images/live.96bd28d4f91d.jpg "Can't I dream?")](https://ableton.com)

---  
