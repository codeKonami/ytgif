YTgif
=====

[Demo link](https://codekonami.github.io/ytgif/)

YTgif is JavaScript library that let you integrate Youtube Videos as gif loop on your website easily.

Just to be clear, it does not generate gif per se. This lib uses the Youtube Player API to simulate a gif-like behavior from Youtube videos.

## How to

Just add the lib ytgif.min.js in your html and call the ytgif() function.

```html
<script src="/ytgif.min.js"></script>
<script>
  ytgif();
</script>
```

To generate a gif add a `div` with a class `ytgif` with some attributes.

- **data-ytgif-id** : is a the Youtube video id
- **data-ytgif-width** : the width wanted
- **data-ytgif-height** : the height wanted

```html
<div
  class="ytgif"
  data-ytgif-id="wGyUP4AlZ6I"
  data-ytgif-width="1280"
  data-ytgif-height="1080">
</div>
```

## Multiple Videos

Yeah you can add as many `div` as you wish !
