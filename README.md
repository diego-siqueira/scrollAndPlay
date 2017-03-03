<h1>scrollAndPlay</h1>
<h3><i>JQuery to active animations with scroll.</i></h3>

Add the class "revealOnScroll" to the element to animate and the class name of the animation 
in the attribute data-down (for the animations when scroll down) and data-up (for the animations when scroll up).

The animations are activate when scroll reaches the parent of the element.

ex:
```javascript
<div> <=Parent object defines the scroll limit to activate animation
  <div class="revealOnScroll" data-down="slideInUp" data-up="slideInDown" data-timeout="0">
    <img src="img1.png" alt="image 1" class="revealOnScroll" data-up="slideInLeft" data-timeout="0">
    <h2>Title</h2>
    <p>Content text</p>
  </div>
</div>
```


 1: In the demo page I used also "animate.css" to define the animations.
 
 2: Don't forget to load JQuery. :)