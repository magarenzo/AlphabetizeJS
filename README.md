# AlphabetizeJS &#128292;

Quickly alphabetize a list of strings

## Demo

[magarenzo.com/projects/AlphabetizeJS/](https://magarenzo.com/projects/AlphabetizeJS/)

## About

I realized I somewhat often want to alphabetize a list, so I figured it'd be nice to have a quick solution I drafted up myself rather than looking online or quickly writing a script, or even worse, doing it manually

Now, I can just navigate to [my demo hosted on my website](https://magarenzo.com/projects/AlphabetizeJS/) and quickly alphabetize a newline or comma separated list!

## Usage

Use `onclick` event of `input` element to pass in the `id` of the textarea containing strings to alphabetize, and the `id` of the `<p>` element where we will display the sorted list of strings

```html
<input type="submit" value="Alphabetize" onclick="alphabetize('strings', 'result');">
```

## Owner

Michael A. Agarenzo
