const { _saveQuestion, _saveQuestionAnswer } = require('./_DATA');

describe('_saveQuestion', () => {
  it('should return the saved question with all expected fields populated', async () => {
    const question = {
      optionOneText: 'Option One',
      optionTwoText: 'Option Two',
      author: 'sarahedo',
    };

    const response = await _saveQuestion(question);

    expect(response).toHaveProperty('id');
    expect(response).toHaveProperty('timestamp');
    expect(response).toHaveProperty('author', question.author);
    expect(response).toHaveProperty('optionOne.text', question.optionOneText);
    expect(response).toHaveProperty('optionTwo.text', question.optionTwoText);
  });

  it('should return an error if incorrect data is passed', async () => {
    const question = {
      optionOneText: 'Option One',
      author: 'sarahedo',
    };

    const response = await _saveQuestion(question).catch((e) => e);

    expect(response).toBe(
      'Please provide optionOneText, optionTwoText, and author'
    );
  });
});

describe('_saveQuestionAnswer', () => {
  it('should return true for correct parameters', async () => {
    const response = await _saveQuestionAnswer({
      authedUser: 'sarahedo',
      qid: '8xf0y6ziyjabvozdd253nd',
      answer: 'optionOne',
    });

    expect(response).toBeTruthy();
  });

  it('should return error for false parameters', async () => {
    const response = await _saveQuestionAnswer({
      authedUser: 'sarahedo',
      qid: undefined,
      answer: 'optionOne',
    }).catch((e) => e);

    expect(response).toBe('Please provide authedUser, qid, and answer');
  });
});
