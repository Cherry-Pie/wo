# wo
### simple as fcuk javascript template engine


```html
<ul id="container-ul"></ul>

<script id="single-li" into="container-ul" type="text/html">
    <li>~name~ and ~var~</li>
</script>
```
```javascript
var data = [
    { name: "first", var: "one" },
    { name: "second", var: "two" }
];
wo.each(data).render('single-li');

// or
var html = wo.fetch('single-li', { 
    name: "Cherry Pie", 
    var: "Tea Spoon" 
});
```
