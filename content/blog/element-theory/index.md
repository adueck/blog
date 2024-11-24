---
title: Element Theory is like Declarative Programming
date: "2024-11-24"
description: ""
---

I'm currently reading ["An Introduction to Element Theory" by Phillip Backley](https://www.amazon.com/Introduction-Element-Theory-Phillip-Backley/dp/0748637427). Element Theory is theory of phonology. Phonology is basically studying the smallest units of sound that make up human language.

It's the lowest of the [levels of studying language](https://www.inf.ed.ac.uk/teaching/courses/hc1/l2notes_levels.html#:~:text=Phonetics%2FPhonology%3A%20The%20level%20of,of%20words%2C%20sentences%20and%20utterances.):

<table>
<tr>
  <td>5</td>
  <td>Discourse</td>
  <td>How collections of sentences are put together and used</td>
</tr>
<tr>
  <td>4</td>
  <td>Semantics</td>
  <td>The meaning of words, sentences, and phrases</td>
</tr>
<tr>
  <td>3</td>
  <td>Syntax</td>
  <td>How words fit together in phrases and sentences (grammar)</td>
</tr>
<tr>
  <td>2</td>
  <td>Morphology</td>
  <td>How words are built from different parts</td>
</tr>
<tr>
  <td>1</td>
  <td>Phonology</td>
  <td><strong>The basic building blocks of sound</strong></td>
</tr>
</table>

In standard phonology, people have studied these basic building blocks by talking about the features of segments of sound. So people talked about if a vowel is rounded or not, or if a consonant is retroflex or not. At the lowest level, **standard phonology uses the position of the mouth and tongue to describe sounds**.

Phillip Backley makes an excellent case for better, truer way of looking at these basic units of sound. **In Element Theory, we look at the sounds themselves**, ignoring the details of how they are produced by the mouth. After all, what's important is the sound that conveys the meaning.

How the sound is actually produced is not as important, and it's also not fixed! As Backley notes, people can produce a retroflex consonant sound in a number of different ways, but the sound and the meaning is the same. Speech could also be produced by a computer, with no physical mouth to articulate sounds with. I also thought about ventriloquists who speak with their mouths closed. Ventriloquists use all kinds of tricks to produce the same units of sound with completely different ways of articulating the sounds in their mouths. The 'implementation' of their sounds is completely different, but the 'meaning' is the same!

Element Theory won my heart just like declarative/functional programming won my heart. Both of these disciplines tries to focus on the meaning of the thing, and not the messy (and changeable) details of the implementation.

Imperative programming gets down to the low level, and talks about how you push around values in different registers. Assign this variable, add 3 to it. Then multiply that by this variable, then put it back in the original variable. A program is a set of instructions for a computer to carry out.

```c
int a = 5;
a = a + 3;
a = b * a;
```

It's like describing a sequence of physical actions that you need to do. Standard phonology does the same thing. Move your tongue up to your teeth, apply air pressure, then let it go. These are actions, but they don't directly describe the meaning of what's being produced.

```haskell
myFunc a b = (a + 3) * b
```

Declarative programming looks at things from a higher level, and talks about the meaning of a program. If you have two numbers, `a` and `b` then `myFunc` is a function that will give you `a` plus three, and multiplied by `b`. There are of course, different ways you can make this program happen. But we're not concerned with that. We just care that about what the program means, mathematically. **That's what we want to describe with declarative programming. What exactly is the meaning of the program, regardless of how it's implemented.**

In the same way, Element Theory recognizes that there are different ways we can make the sounds that make up language. We can talk the way most normal people do, or we can run a speech synthesizer, or we could do all kinds of ventriloquist tricks, but the content and the meaning of the sounds would be the same. **And that's what we want to describe with Element Theory. What exactly are the sounds, regardless of how they are produced**.
