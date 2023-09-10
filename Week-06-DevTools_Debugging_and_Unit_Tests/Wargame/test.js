
describe('Card', () => {
  describe('createCard', () => {
    it('should return the correct card description', () => {
      // Arrange
      const card = new Card('Hearts', 'Ace', 1);

      // Act
      const cardDescription = card.createCard();

      // Assert
      expect(cardDescription).to.equal('Ace of Hearts');
    });
  });
});