---
tags:
  - posts
  - NLP
title: Tokenizers
cover: Tokenization.svg
summary: Understanding various tokenization techniques and their use cases.
date: 2023-12-15
---

Given a piece of text, how do we split it before passing it on to our model. In the previous post on word embeddings, we split our text into words by dividing it at whitespaces. This post aims to address the question of what is the best way to tokenize or split our text.

## Character level tokenization

One of the simplest ways of tokenizing
is splitting text into its individual characters.

Here is a simple example:
```python
text = "Its cold"
[c for c in text]
>>> ['I', 't', 's', ' ', 'c', 'o', 'l', 'd']
```

This type of tokenization works well when creating models that are heavily focused on the individual characters, such as in spelling correction.

Imagine having to read a whole paragraph character by character. We can quickly realize the downside to character level tokenization in that it causes most of our model to focus on learning individual words, drastically reducing the model's understanding of relationships between words. It can also lead to extremely large sequences.

## Word level tokenization

Another simple approach is to split text into words.

```python
text = "The quick brown fox jumps over the lazy dog"
text.split()
>>> ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
```

With word level tokenization our model can easily understand the semantic relationships between words. However, it has quite a few downsides as well:

- The vocabulary size can become quite big easily getting to the range of 100,000 words.
- Depending on the dataset, our model can encounter quite a lot of unknown words.
- Our model cannot handle new names, case variations, etc. making it unusable for tasks like code generation and understanding, question answering, etc.
- We cannot handle even slight variations to words if they do not appear in our dataset.

  For example,
  - `travel` and `travelling`
  - `jump` and `jumps`
  - etc..

## Sub-word Tokenization

Most of these drawbacks can be overcome by splitting words into smaller subwords.

```python
text = "She expressed her feelings openly."
subword_tokenization(text)
>>> ['She', 'expressed', 'he', 'r', 'feeling', 's', 'open', 'ly']
```

Various techniques have been developed to perform subword tokenization.

### Byte-pair encoding

Byte-pair encoding is a simple and powerful method. It works by along the same principle as the compression algorithm with the same name.

Here is an overview of how it works:
1. We start off by initializing the vocabulary with just the set of all unique characters in the corpus. At this point, it acts just like the character level tokenization method.
2. We tokenize the corpus based on our current vocabulary.
3. Then we calculate the frequency of all the pairs of consecutive tokens in the tokenized corpus.
4. We merge the pair that has the highest frequency and add it to the vocabulary.
5. We repeat this until we reach our desired vocabulary size.

Byte-pair encoding has quite a few advantages over word level tokenization:
- We are able to tokenize almost any word as long as its characters are in the base vocabulary.
- We are able to precisely set the size of the vocabulary by limiting the number of merges.

BPE comes with the downsides in that pre-tokenization is performed by splitting text at whitespaces. So, the encoder does not handle whitespace as a separate character which means there is loss of information if multiple whitespaces exist.

### Wordpiece

It works on the same principle as BPE but differs in two ways:
- It uses a different merging criterion:
  ```
  score = (freq_of_pair)/(freq_of_first_element×freq_of_second_element)
  ```
- Uses special characters to represent whether a token is from the start, middle or end of a word.

Original paper:
```python
"She expressed her feelings openly."
>>> ['__She', '__expressed', '__he', 'r', '__feeling', 's', '__open', 'ly']
```

BERT implementation:
```python
"She expressed her feelings openly."
>>> ['She', 'expressed', 'he', '##r', 'feeling', '##s', 'open', '##ly']
```

### Unigram

BPE encodes sequences by using the largest sequence of subwords in its vocabulary. However, a sentence can be represented as different sequences of subwords using the same vocabulary.

The Unigram paper suggests two major changes based on this:
1. Subword Regularization: Instead of using a single subword sequence, we sample from all the possible sequences.
2. Unigram model: The unigram model starts of with a large vocabulary of subwords and progressively removes the subwords which benefit the loss function (log likelihood) the least until the desired vocabulary size is reached.

### BPE with dropout

Subword Regularization suggested by the unigram paper was found to be a powerful method even when applied to BPE. It works by randomly removing merges applied during the encoding step.

### Byte level BPE

Instead of creating a base vocabulary of characters, the GPT2 paper suggested using bytes which ensured that any text could be tokenized.

### Sentencepiece

Sentencepiece itself uses BPE and unigram model but makes a few changes allowing it to be trained directly without preprocessing.

- It trains from raw sequences without pre-tokenization.
- It treats the input as just a sequence of Unicode character. It also treats whitespace like any other character.

  Since whitespace is preserved, there is no loss of information during the encoding process making it a suitable method for language models that handle code.

## Normalization methods

Normalization allows us to transform our text into a more consistent form before tokenizing it.

Some common normalization methods are:
- Case normalization - Converting all characters to lowercase or uppercase
- Unicode normalization
- Removing whitespaces
- Stripping accents
- Removing emojis, URLs, etc.

## Pre-tokenization methods

Pre-tokenization involves splitting the input before passing it through the tokenizer.

Some common pre-tokenization methods are:
- Byte pre-tokenization - Used for Byte level BPE and similar techniques
- Whitespace - Splitting at whitespaces, newlines, etc.
- Punctuation
- Metaspace - Splitting at whitespaces while preserving whitespace by replacing it with a special character. Used in techniques like sentencepiece.

## References
- [BPE Paper](https://arxiv.org/abs/1508.07909v5)
- [Wordpiece Paper](https://arxiv.org/abs/1609.08144v2)
- [Unigram Paper](https://arxiv.org/abs/1804.10959v1)
- [BPE Dropout Paper](https://arxiv.org/abs/1910.13267)
- [Sentencepiece](https://github.com/google/sentencepiece)
- [GPT2 Paper](https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf)
- [HuggingFace NLP Course](https://huggingface.co/learn/nlp-course/chapter6)
- [HuggingFace Tokenizers](https://huggingface.co/docs/tokenizers/components)
- [HuggingFace Tokenizer Post](https://huggingface.co/docs/transformers/tokenizer_summary)
