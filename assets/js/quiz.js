// assets/js/quiz.js
const quizData = [
  {
    question:
      "Ai là người chỉ huy quân đội trong trận Đánh trận Điện Biên Phủ?",
    options: [
      "Hoàng Minh Thảo",
      "Võ Nguyên Giáp",
      "Nguyễn Chí Thanh",
      "Phan Đình Giót",
    ],
    answer: "Võ Nguyên Giáp",
  },
  {
    question: "Ngày chiến thắng Điện Biên Phủ là ngày nào?",
    options: ["7/5/1954", "10/5/1954", "15/5/1954", "2/9/1954"],
    answer: "7/5/1954",
  },
  {
    question: "Phong trào Cần Vương do ai lãnh đạo?",
    options: [
      "Tôn Thất Thuyết",
      "Phan Bội Châu",
      "Nguyễn Thái Học",
      "Phan Châu Trinh",
    ],
    answer: "Tôn Thất Thuyết",
  },
  {
    question: "Ai là người phát động cuộc khởi nghĩa Yên Thế?",
    options: [
      "Trương Văn Lắm",
      "Hoàng Hoa Thám",
      "Phan Đình Phùng",
      "Nguyễn Thiện Thuật",
    ],
    answer: "Hoàng Hoa Thám",
  },
  {
    question: "Hiệp định Giơ-ne-vơ về Việt Nam được ký kết vào năm nào?",
    options: ["1953", "1954", "1955", "1956"],
    answer: "1954",
  },
  {
    question:
      "Chiến dịch nào đánh dấu sự thất bại lớn của quân Pháp trong cuộc kháng chiến chống Pháp?",
    options: [
      "Chiến dịch Quang Trung",
      "Chiến dịch Biên Giới",
      "Chiến dịch Điện Biên Phủ",
      "Chiến dịch Vạn Tường",
    ],
    answer: "Chiến dịch Điện Biên Phủ",
  },
  {
    question: "Ai là người sáng lập Đảng Cộng sản Đông Dương?",
    options: ["Tố Hữu", "Trường Chinh", "Hồ Chí Minh", "Nguyễn Ái Quốc"],
    answer: "Hồ Chí Minh",
  },
  {
    question:
      "Trận đánh nào là trận chiến mở đầu cho cuộc kháng chiến chống Pháp?",
    options: ["Trận Bạch Đằng", "Trận Cầu Giấy", "Trận Đống Đa", "Trận Ba Vì"],
    answer: "Trận Cầu Giấy",
  },
  {
    question: "Ai là người chỉ huy trận đánh Cầu Giấy vào năm 1882?",
    options: [
      "Nguyễn Quang Bích",
      "Trần Quý Cáp",
      "Hoàng Diệu",
      "Tôn Thất Thuyết",
    ],
    answer: "Hoàng Diệu",
  },
  {
    question: "Ai là người sáng lập phong trào Đông Du?",
    options: [
      "Phan Bội Châu",
      "Nguyễn Thái Học",
      "Phan Châu Trinh",
      "Nguyễn Ái Quốc",
    ],
    answer: "Phan Bội Châu",
  },
  {
    question: "Chiến tranh Pháp - Việt lần thứ nhất diễn ra từ năm nào?",
    options: ["1858", "1862", "1873", "1884"],
    answer: "1858",
  },
  {
    question:
      "Tổ chức nào của Việt Nam đã tổ chức những cuộc khởi nghĩa lớn chống Pháp vào cuối thế kỷ 19?",
    options: [
      "Tâm Tâm Hội",
      "Việt Nam Quốc Dân Đảng",
      "Tình Nghĩa Hội",
      "Hội Phục Hưng",
    ],
    answer: "Việt Nam Quốc Dân Đảng",
  },
  {
    question: "Năm 1945, Hồ Chí Minh đã đọc bản Tuyên ngôn độc lập tại đâu?",
    options: [
      "Quảng trường Ba Đình",
      "Lăng Chủ tịch Hồ Chí Minh",
      "Đài tưởng niệm Liệt sĩ",
      "Nhà hát lớn Hà Nội",
    ],
    answer: "Quảng trường Ba Đình",
  },
  {
    question:
      "Nước Pháp chính thức công nhận độc lập của Việt Nam qua Hiệp định nào?",
    options: [
      "Hiệp định Paris",
      "Hiệp định Giơ-ne-vơ",
      "Hiệp định Tokyo",
      "Hiệp định Versailles",
    ],
    answer: "Hiệp định Giơ-ne-vơ",
  },
  {
    question:
      "Trận đánh nào đã dẫn đến sự thất bại của quân Pháp trong cuộc chiến tranh Đông Dương?",
    options: [
      "Trận Sơn Tây",
      "Trận Điện Biên Phủ",
      "Trận Hà Nội",
      "Trận Lào Cai",
    ],
    answer: "Trận Điện Biên Phủ",
  },
  {
    question:
      "Ai là người đứng đầu Chính phủ lâm thời Việt Nam Dân chủ Cộng hòa sau Cách mạng tháng Tám năm 1945?",
    options: [
      "Tôn Đức Thắng",
      "Hồ Chí Minh",
      "Phạm Văn Đồng",
      "Nguyễn Lương Bằng",
    ],
    answer: "Hồ Chí Minh",
  },
  {
    question:
      "Ai đã lãnh đạo quân đội Việt Nam trong chiến dịch Biên Giới năm 1950?",
    options: ["Võ Nguyên Giáp", "Trường Chinh", "Phạm Văn Đồng", "Lê Duẩn"],
    answer: "Võ Nguyên Giáp",
  },
  {
    question:
      "Ai là người đầu tiên mở màn cuộc chiến tranh Đông Dương chống lại quân Pháp vào năm 1858?",
    options: [
      "Nguyễn Ái Quốc",
      "Phan Bội Châu",
      "Tôn Thất Thuyết",
      "Nguyễn Huệ",
    ],
    answer: "Tôn Thất Thuyết",
  },
  {
    question: "Cuộc kháng chiến chống Pháp kéo dài bao lâu?",
    options: ["10 năm", "20 năm", "30 năm", "15 năm"],
    answer: "9 năm",
  },
  {
    question:
      "Trong cuộc kháng chiến chống Pháp, ai là người sáng lập phong trào Cách Mạng tháng Tám?",
    options: [
      "Hồ Chí Minh",
      "Phan Châu Trinh",
      "Tôn Thất Thuyết",
      "Trần Hưng Đạo",
    ],
    answer: "Hồ Chí Minh",
  },
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const submitBtn = document.getElementById("submit");
const nextBtn = document.getElementById("next");
const currentQuestionEl = document.getElementById("current-question");
const totalQuestionsEl = document.getElementById("total-questions");
const scoreEl = document.getElementById("score");
const resultsEl = document.getElementById("results");
const finalScoreEl = document.getElementById("final-score");
const totalScoreEl = document.getElementById("total-score");
const restartBtn = document.getElementById("restart");
const quizEl = document.getElementById("quiz");

function loadQuestion() {
  const question = quizData[currentQuestion];
  questionEl.textContent = question.question;

  optionsEl.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option";
    button.textContent = option;
    button.addEventListener("click", () => selectOption(button, index));
    optionsEl.appendChild(button);
  });

  currentQuestionEl.textContent = currentQuestion + 1;
  totalQuestionsEl.textContent = quizData.length;
  submitBtn.style.display = "block";
  nextBtn.style.display = "none";
  selectedOption = null;
}

function selectOption(button, index) {
  const options = document.querySelectorAll(".option");
  options.forEach((opt) => opt.classList.remove("selected"));
  button.classList.add("selected");
  selectedOption = index;
}

function checkAnswer() {
  if (selectedOption === null) return;

  const options = document.querySelectorAll(".option");
  const correctAnswer = quizData[currentQuestion].answer;
  const selectedAnswer = quizData[currentQuestion].options[selectedOption];

  options.forEach((option) => {
    if (option.textContent === correctAnswer) {
      option.classList.add("correct");
    }
    if (
      option.textContent === selectedAnswer &&
      selectedAnswer !== correctAnswer
    ) {
      option.classList.add("incorrect");
    }
  });

  if (selectedAnswer === correctAnswer) {
    score++;
    scoreEl.textContent = score;
  }

  submitBtn.style.display = "none";
  nextBtn.style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quizEl.style.display = "none";
  resultsEl.style.display = "block";
  finalScoreEl.textContent = score;
  totalScoreEl.textContent = quizData.length;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  scoreEl.textContent = 0;
  quizEl.style.display = "block";
  resultsEl.style.display = "none";
  loadQuestion();
}

submitBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartQuiz);

// Initialize quiz
loadQuestion();
