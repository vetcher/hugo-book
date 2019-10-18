---
title: Introduction
---

# Description

* Based on [hugo-book](https://github.com/alex-shpak/hugo-book)
* Markdown
* Menu over files tree
* Content search
* Table of content
* Print content button
* Copy to clipboard code snippets and [Fira Code](https://github.com/tonsky/FiraCode) font.
* Graphs, katex, expand/collapse, columns, tabs.

# Markdown

### Text
It's very easy to make some words **bold** and other words *italic* with Markdown. You can even [link to Google!](http://google.com)

Also, below you can see splitter:

---

### List

Sometimes you want numbered lists:

1. One
2. Two
3. Three

Sometimes you want bullet points:

* Start a line with a star
* Profit!

Alternatively,

- Dashes work just as well
- And if you have sub points, put two spaces before the dash or star:
  - Like this
  - And this

If you include a task list in the first comment of an Issue, you will get a handy progress indicator in your issue list. It also works in Pull Requests!

- [x]  **formatting**, [links](#list), and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

### Image
If you want to embed images, this is how you do it:

![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)

### Headers

# H1
## H2
### H3
H3, H4, H5 and H6 is not available in table of content! But you still can share links.
#### H4
##### H5
###### H6

### quote
If you'd like to quote someone, use the > character before the line:

> Coffee. The finest organic suspension ever devised... I beat the Borg with it.  
> - Captain Janeway

### Code

This is `inline` code.

Code blocks.
There is also `copy to clipboard` button. It copies all content of code snippet to clipboard.

    public class MineSweeper
    {	private int[][] myTruth;
        private boolean[][] myShow;
        
        public void cellPicked(int row, int col)
        {	if( inBounds(row, col) && !myShow[row][col] )
            {	myShow[row][col] = true;
            
                if( myTruth[row][col] == 0)
                {	for(int r = -1; r <= 1; r++)
                        for(int c = -1; c <= 1; c++)
                            cellPicked(row + r, col + c);
                }	
            }
        }
        
        public boolean inBounds(int row, int col)
        {	return 0 <= row && row < myTruth.length && 0 <= col && col < myTruth[0].length;
        }
    }
    
Block with language highlighting:

```java
public class MineSweeper
{	private int[][] myTruth;
	private boolean[][] myShow;
	
	public void cellPicked(int row, int col)
	{	if( inBounds(row, col) && !myShow[row][col] )
		{	myShow[row][col] = true;
		
			if( myTruth[row][col] == 0)
			{	for(int r = -1; r <= 1; r++)
					for(int c = -1; c <= 1; c++)
						cellPicked(row + r, col + c);
			}	
		}
	}
	
	public boolean inBounds(int row, int col)
	{	return 0 <= row && row < myTruth.length && 0 <= col && col < myTruth[0].length;
	}
}
```

# Другие языки
У лукоморья дуб зелёный;  
Златая цепь на дубе том:  
И днём и ночью кот учёный  
Всё ходит по цепи кругом;  
Идёт направо — песнь заводит,  
Налево — сказку говорит.  
Там чудеса: там леший бродит,  
Русалка на ветвях сидит;  
Там на неведомых дорожках  
Следы невиданных зверей;  
Избушка там на курьих ножках  
Стоит без окон, без дверей;  
Там лес и дол видений полны;  
Там о заре прихлынут волны  
На брег песчаный и пустой,  
И тридцать витязей прекрасных  
Чредой из вод выходят ясных,  
И с ними дядька их морской;  
Там королевич мимоходом  
Пленяет грозного царя;  
Там в облаках перед народом  
Через леса, через моря  
Колдун несёт богатыря;  
В темнице там царевна тужит,  
А бурый волк ей верно служит;  
Там ступа с Бабою Ягой  
Идёт, бредёт сама собой,  
Там царь Кащей над златом чахнет;  
Там русский дух… там Русью пахнет!  
И там я был, и мёд я пил;  
У моря видел дуб зелёный;  
Под ним сидел, и кот учёный  
Свои мне сказки говорил.  

# Shortcodes

## Columns

{{< columns >}}
## Astris ipse furtiva

Est in vagis et Pittheus tu arge accipiter regia iram vocatur nurus. Omnes ut
olivae sensit **arma sorori** deducit, inesset **crudus**, ego vetuere aliis,
modo arsit? Utinam rapta fiducia valuere litora _adicit cursu_, ad facies

<--->

## Suis quot vota

Ea _furtique_ risere fratres edidit terrae magis. Colla tam mihi tenebat:
miseram excita suadent es pecudes iam. Concilio _quam_ velatus posset ait quod
nunc! Fragosis suae dextra geruntur functus vulgata.

<--->

Lorem **markdownum** emicat gestu. Cannis sol pressit ducta. **Est** Idaei,
tremens ausim se tutaeque, illi ulnis hausit, sed, lumina cutem. Quae avis
sequens!
{{< /columns >}}

## Buttons

{{< button relref="/" >}}Get Home{{< /button >}}
{{< button href="https://google.com" >}}Google{{< /button >}}

## Expand

{{< expand >}}
### Markdown content
Lorem markdownum insigne...
{{< /expand >}}

## Hints

{{< hint info >}}
**Markdown content**  
Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
{{< /hint >}}

{{< hint warning >}}
**Markdown content**  
Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
{{< /hint >}}

{{< hint danger >}}
**Markdown content**  
Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
{{< /hint >}}

## Graphviz

You can draw graphs via graphviz or mermaid.

{{< columns >}}
### Graphviz

```graphviz
/* courtesy Ian Darwin and Geoff Collyer, Softquad Inc. */
digraph unix {
	size="6,6";
	node [color=lightblue2, style=filled];
	"5th Edition" -> "6th Edition";
	"5th Edition" -> "PWB 1.0";
	"6th Edition" -> "LSX";
	"6th Edition" -> "1 BSD";
	"6th Edition" -> "Mini Unix";
	"6th Edition" -> "Wollongong";
	"6th Edition" -> "Interdata";
	"Interdata" -> "Unix/TS 3.0";
	"Interdata" -> "PWB 2.0";
	"Interdata" -> "7th Edition";
	"7th Edition" -> "8th Edition";
	"7th Edition" -> "32V";
	"7th Edition" -> "V7M";
	"7th Edition" -> "Ultrix-11";
	"7th Edition" -> "Xenix";
	"7th Edition" -> "UniPlus+";
	"V7M" -> "Ultrix-11";
	"8th Edition" -> "9th Edition";
	"1 BSD" -> "2 BSD";
	"2 BSD" -> "2.8 BSD";
	"2.8 BSD" -> "Ultrix-11";
	"2.8 BSD" -> "2.9 BSD";
	"32V" -> "3 BSD";
	"3 BSD" -> "4 BSD";
	"4 BSD" -> "4.1 BSD";
	"4.1 BSD" -> "4.2 BSD";
	"4.1 BSD" -> "2.8 BSD";
	"4.1 BSD" -> "8th Edition";
	"4.2 BSD" -> "4.3 BSD";
	"4.2 BSD" -> "Ultrix-32";
	"PWB 1.0" -> "PWB 1.2";
	"PWB 1.0" -> "USG 1.0";
	"PWB 1.2" -> "PWB 2.0";
	"USG 1.0" -> "CB Unix 1";
	"USG 1.0" -> "USG 2.0";
	"CB Unix 1" -> "CB Unix 2";
	"CB Unix 2" -> "CB Unix 3";
	"CB Unix 3" -> "Unix/TS++";
	"CB Unix 3" -> "PDP-11 Sys V";
	"USG 2.0" -> "USG 3.0";
	"USG 3.0" -> "Unix/TS 3.0";
	"PWB 2.0" -> "Unix/TS 3.0";
	"Unix/TS 1.0" -> "Unix/TS 3.0";
	"Unix/TS 3.0" -> "TS 4.0";
	"Unix/TS++" -> "TS 4.0";
	"CB Unix 3" -> "TS 4.0";
	"TS 4.0" -> "System V.0";
	"System V.0" -> "System V.2";
	"System V.2" -> "System V.3";
}

```
<--->

### Mermaid

{{< mermaid >}}
sequenceDiagram
    Alice->>Bob: Hello Bob, how are you?
    alt is sick
        Bob->>Alice: Not so good :(
    else is well
        Bob->>Alice: Feeling fresh like a daisy
    end
    opt Extra response
        Bob->>Alice: Thanks for asking
    end
{{< /mermaid >}}

{{< /columns >}}

## Tabs


{{< tabs "uniqueid" >}}
{{< tab "MacOS" >}}
### MacOS

This is tab **MacOS** content.

Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
protulit, sed sed aere valvis inhaesuro Pallas animam: qui _quid_, ignes.
Miseratus fonte Ditis conubia.
{{< /tab >}}

{{< tab "Linux" >}}

### Linux

This is tab **Linux** content.

Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
protulit, sed sed aere valvis inhaesuro Pallas animam: qui _quid_, ignes.
Miseratus fonte Ditis conubia.
{{< /tab >}}

{{< tab "Windows" >}}

### Windows

This is tab **Windows** content.

Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
protulit, sed sed aere valvis inhaesuro Pallas animam: qui _quid_, ignes.
Miseratus fonte Ditis conubia.
{{< /tab >}}
{{< /tabs >}}

## Katex

{{< katex >}}
x = \begin{cases}
   a &\text{if } b \\
   c &\text{if } d
\end{cases}
{{< /katex >}}
