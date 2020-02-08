import random
​
# Deck of cards
# 52 cards in a deck
# suits hearts, spades, diamonds, clubs
​
# [x] build card
# [x] build deck
# [ ] implement shuffle
# [ ] implement a sort
# [ ] implement a game
​
​


class Card():
    def __init__(self, suit, value):
        self.value = value
        self.suit = suit
        names = {
            1: "Ace",
            11: "Jack",
            12: "Queen",
            13: "King"
        }
        self.name = names.get(value) or str(value)


​


def show_value(self):
    print(f"{self.name} of {self.suit}")


​
​
# ace_of_hearts = Card('hearts', 2)
# ace_of_hearts.show_value()
​


class Deck():
    def __init__(self):
        self.cards = []


​
# populate / the cards list
for suit in ["Hearts", "Clubs", "Diamonds", "Spades"]:
    # build each suit
    # print('suit:"', suit)
    for value in range(1, 14):
        # print('value:"', value)
        # create a card
        self.cards.append(Card(suit, value))
​


def shuffle(self):
    print("")
    print("")
    print("")
    print(f"{len(self.cards)} cards in the Bicycle Deck")
    list_a = []
    list_b = []
    list_c = []


​
for a in range(0, 500, 1):
    for i in range(0, len(self.cards)-1, 3):
        list_a.append(self.cards[i])
​
for j in range(0, len(self.cards)-1, 3):
    list_b.append(self.cards[j])
​
for k in range(0, 18, 1):
    list_c.append(self.cards[k])
​
self.cards = []
​
# print("Deck Split")
# print(f"{len(self.cards)} cards in the Bicycle Deck")
# print(f"{len(list_a)} cards in list A")
# print(f"{len(list_b)} cards in list B")
# print(f"{len(list_c)} cards in list C")
​
for i in range(0, 17, 1):
    self.cards.append(list_a[i])
​
for j in range(0, 17, 1):
    self.cards.append(list_b[j])
​
for k in range(0, 18, 1):
    self.cards.append(list_c[k])
​
list_a = []
list_b = []
list_c = []
​
print("Deck Put Back")
print(f"{len(self.cards)} cards in the Bicycle Deck")
print(f"{len(list_a)} cards in list A")
print(f"{len(list_b)} cards in list B")
print(f"{len(list_c)} cards in list C")
​


def sort(self):
    pass


​


def game(self):
    pass


​
​
bicycle_deck = Deck()
​
for card in bicycle_deck.cards:
    card.show_value()
​
bicycle_deck.shuffle()
print("")
print("")
print("")
​
​
for card in bicycle_deck.cards:
    card.show_value()
Collapse
