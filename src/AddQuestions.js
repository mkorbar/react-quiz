const AddQuestions = (params) => {
  function parseCsvToQuestions(csvText) {
    const lines = csvText.split("\n");
    const questions = [];
    lines.map((line) => {
      const fields = line.split(",");
      if (fields.length < 3) {
        return null;
      }
      questions.push({ question: fields[0], answers: fields.slice(1) });
    });
    return questions;
  }

  function saveQuestions(e) {
    e.preventDefault();
    const csvText = e.target[0].value;
    const questions = parseCsvToQuestions(csvText);
    if (questions.length > 0) {
      localStorage.setItem("questions", JSON.stringify(questions));
      params.setQ(questions);
    }
  }

  return (
    <div>
      <p style={{ marginBottom: "0.3em" }}>
        Enter a csv data in the following form:
      </p>
      <div className="code">
        question1,correct_answer,wrong_answer,wrong_answer,wrong_answer,...
        <br />
        question2,correct_answer,wrong_answer,wrong_answer,wrong_answer,...
        <br />
        ...
      </div>
      <form onSubmit={(e) => saveQuestions(e)}>
        <textarea rows="8"></textarea>
        <button type="submit">Save questions</button>
      </form>
    </div>
  );
};

export default AddQuestions;
