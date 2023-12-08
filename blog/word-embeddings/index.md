---
tags:
  - posts
  - NLP
title: Word Embeddings
cover: image.png
summary: Understanding word2vec and gloVe algorithms and the significance of word embeddings.
---

- word2vec
- gloVe

Convert words to a lower dimension vector.
The vectors of words with similar meanings have vectors with are closer.

Similar to how convolutional layers from a pre-trained vision model gives us useful patters and representations, word embeddings capture relationships between words making the language model's job easier.

Pros:
- Easier representation of words. Using one hot vectors for each word in the dictionary will make a huge model. Using lower order embeddings reduces number of params in the model.

Cons:
- Can only represent whole words
- Does not work on words which were never seen before
  Ex: We might encounter masculine form of a word in hindi during training but cannot represent the feminine form even though it differs only slightly.
- Not aware of context of surrounding words which might cause the word to have a different meaning.

## Word2Vec

Group of models that produce word embeddings. There are two different model architectures in word2vec:

- Skip-gram (slower, better for infrequent words)
- Continuous Bag of Words (CBOW) (faster)

Training methods:
- Hierarchical softmax (better for infrequent words)
- Negative sampling (better for frequent words, works well when producing low dimensional vectors)

> NOTES:
>
> - Use sub-sampling of frequent words. (words that occur frequently are randomly removed during training)
> - Use context/window size of around 5 for CBOW and 10 for skip-gram.

### Skip-gram

It assumes that the surrounding words in the context are generated based on the centre word.

Ex:

Given,
Text sequence = "Pretrained word embeddings are awesome"
The skip-gram model tries to predict the context words "Pretrained", "word", "are" and "awesome" given the centre word "embeddings".

### Continuous bag of words

It assumes that the centre word is generated based on the surrounding words.

Ex:

Given,
Text sequence = "Pretrained word embeddings are awesome"
The continuous bag of words model tries to predict the centre word "embeddings" given the context words "Pretrained", "word", "are" and "awesome".

### Sub sampling

Since, frequent words like "the", "a", etc. are not very useful when generating surrounding words, our model can benefit from pruning them. So, we discard every word in our dataset with the probability sqrt(k * corpus_length / count(word)). This makes it so that words that occur more have a higher probability of being removed. (NOTE: We are not removing the word from the vocabulary rather we are removing a single occurence of the word in our dataset based on the probability.)

### Training methods

1. Softmax:
   The simplest way to train our word embeddings is to make a classifier. Let us take the example of the continuous bag of words model. Given the context words, first we convert the words from their indices to the embedding vector by calculating the dot product between the index and our embedding weights. Then our model classifies the target word and we use cross entropy loss to update the embedding weights.

2. Hierarchical softmax
   The above softmax approach can be very computationally expensive when training embeddings on a large vocabulary. Hierarchical softmax approximates the values that would be obtained from the softmax approach while being more efficient computationally.

3. Negative sampling
   With negative sampling, we model our problem as a regression rather than classification, more specifically, rather than predicting a target word given one or more context word, we predict the probability of a target and context word pair occurring together.

## GloVe

GloVe builds upon word2vec by also taking into account the number of times a word pair occurs together in the entire corpus and not just the current window.
