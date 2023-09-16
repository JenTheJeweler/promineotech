describe("Card", () => {
  describe("createCard", () => {
    it('should return the correct card description', () => {
      const card = new Card('Hearts', 'Ace', 1);

      const cardDescription = card.createCard();

      expect(cardDescription).to.equal('Ace of Hearts');
    });
  });
});

