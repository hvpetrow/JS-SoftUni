function createCard(face,suit) {
    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    if (Object.keys(suits).includes(suit)==false) {
        throw new Error('Invalid suit');
    }

    return {
        face,
        suit: suits[suit],
        toString(){
            return this.face + this.suit;
        }
    };
}