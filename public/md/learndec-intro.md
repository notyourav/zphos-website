# learn asm

This tutorial will assume you have a basic understanding of concepts found in programming languages, namely: variables and functions.

Many people know that computers operate on "1s and 0s" (binary). It is true that these two magic numbers are responsible for the complete functioning of devices.
Putting this into consideration, surely it must be difficult to speak the same language as a computer; who would be able to read a stream of numbers?

The truth is, it *is* easy, and I will help you understand why.

The 1s and 0s that our computer's processor reads are no different than the letters in our own written languages.
If we break words down into their individual letters, and remove all the punctuation and spacing, we get an unreadable mess.

```
ButImustexplaintoyouhowallthismistakenideaofdenouncingpleasureandpraisingpainwasbornandIwillgiveyouacompleteaccountofthesystemandexpoundtheactualteachingsofthegreatexplorerofthetruththemasterbuilderofhumanhappiness

(Lorem Ipsum translation by H. Rackham)
```

It only gets worse if it's in a language we don't understand.

So, if we represented a written language as simply a "series of characters", and it can clearly be hard to understand.
Just like spoken languages, the language that machines speak is also made of words!
Following this analogy, simplifying computers into just "1s and 0s" can be misleading.

In fact, chances are it would be easier for you to learn the language your machine speaks than another spoken language.
It is written in a language that each of us already use, practically everyday: *logic*!

Since these "words" are purely functional, we call them **instructions**.
Simply put, computers run by reading an *enormous* list of instructions to follow.

However, like us, different machines can and do speak different languages from one another.
These languages can be divided into two categories: **CISC** and **RISC**.

**CISC** (Complex Instruction Set Computer) aims to make these instructions as complex as possible, while **RISC**
(Reduced Instruction Set Computer) uses instructions that are very simple and easy to understand conceptually.

**CISC** instructions can be thought of as "contractions" of **RISC** instructions. (eg: I've vs I have)

For a native English speaker, "I've" would be quicker and more efficient to write out.
However, "I have" can be broken into individual pieces and understood more easily by someone less familiar with the language.
Following this analogy, it is easier to understand **RISC** instructions, so we will be sticking with those.

Almost all instructions are used to perform simple arithmetic on small pieces of data, or move them to different locations. 
Let's look at a snippet of machine code and then break it down into the individual arithmetic operations.

The following is a hexadecimal view of **RISC** machine code, which is what your machine sees.
Specifically, this is for the GameBoy Advance CPU, which uses the ARM instruction set. If you have a phone or a tablet,
chances are it uses a variation of the ARM instruction set as well, so it will look similar to this.

```
00 B5 00 48 28 30 00 78
FF 28 01 D1 FF F7 3C FF
00 BD
```
Next we have a human readable representation of the above hexadecimal. This is called **assembly**.
```
	push	{lr}
	ldr	r0, [area]
	add	r0, #0x28
	ldrb	r0, [r0, #0x0]
	cmp	r0, #0xFF
	bne	return
	bl	get_behavior
return:
	pop	{pc}
```

You will find two main things in assembly: mnemonics, and operands (these can be registers, symbols, and numeric values).

**Mnemonics** are just the human readable name of an instruction. They are almost never full words and are either acronyms or abbreviations.
**Operands** are simply the "arguments" the instructions.

The following is a table explaining the above mnemonics:
```
PUSH - PUSH register to stack
LDR - LoaD Register
ADD - ADD operands
LDRB - LoaD Register with Byte
CMP - CoMPare operands
BNE - Branch Not Equal
BL - Branch Long
POP - POP register from stack
```

**Registers** are a temporary place to store data. This particular instruction set uses `r0-r7` as "general purpose" registers.

**Symbols** refer to a location in memory. This can be in RAM or the executable itself. In the snippet, `area` refers to a
location in RAM, while `return` and `get_behavior` refer to a location in the executable (specifically the code section).

**Numeric values** consist of decimal or hexidecimal numbers. They are usually limited to a specific range.
For example, registers on this processor are 4 bytes long, so the maximum *unsigned* value one can hold is 4,294,967,295.
