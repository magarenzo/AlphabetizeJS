# AlphabetizeJS &#128292;

Quickly alphabetize a list of words split by commas and/or newlines

## Overview

I realized I somewhat often want to alphabetize a list, so I figured it'd be nice to have a quick solution I drafted up myself rather than looking online, or even worse, doing it manually &#129314;

## Using the Script

Use `onclick` event of `<input>` to pass in the `id` of the `<textarea>` containing words to alphabetize, and the `id` of the `<p>` where we will display the sorted list of words

```html
<input type="submit" value="Alphabetize" onclick="alphabetize('words', 'result');">
```

## Owner

[Michael A. Agarenzo](https://magarenzo.com)
