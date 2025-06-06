import { View, Text, Pressable, GestureResponderEvent } from "react-native";
import {
  Question,
  questions as importedQuestions,
} from "../components/questions";
import { useState } from "react";

const questions = importedQuestions;

const QuestionBox = ({
  question,
  showAnswer,
  setShowAnswer,
}: {
  question: Question;
  showAnswer: boolean;
  setShowAnswer: (show: boolean) => void;
}) => {
  return (
    <View className="w-full flex flex-col justify-center">
      <Text className="mb-2 flex flex-col items-center text-center justify-center">
        {question.question}
      </Text>
      {showAnswer ? (
        <View className="flex flex-col items-center">
          <Text className="flex justify-center">
            Rätt svar: {question.answer}
          </Text>
          <Text className="flex justify-center mt-2 italic max-w-prose text-center">
            {question.background}
          </Text>
        </View>
      ) : (
        <View className="flex flex-row justify-center">
          <MyButton
            label="Visa svar"
            onPress={() => {
              setShowAnswer(true);
            }}
          />
        </View>
      )}
    </View>
  );
};

const shuffleQuestions = (questions: Question[]): Question[] => {
  return questions
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const shuffleAndPileQuestions = (questions: Question[]): PiledQuestion[] => {
  const shuffled = shuffleQuestions(questions);
  return shuffled.map((q) => ({ ...q, isOpened: false }));
};

type PiledQuestion = Question & { isOpened: boolean };

type PressHandler = null | ((event: GestureResponderEvent) => void) | undefined;

const MyButton = ({
  onPress = null,
  label,
  disabled,
  type = "secondary",
}: {
  onPress?: PressHandler;
  label: string;
  disabled?: boolean;
  type?: "primary" | "secondary";
}) => {
  let bgColor: "bg-neutral-300" | "bg-green-800" | "bg-neutral-200" =
    "bg-neutral-200";
  if (type === "primary") {
    bgColor = "bg-green-800";
  }
  if (disabled) {
    bgColor = "bg-neutral-300";
  }

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`${bgColor} p-2 flex items-center`}
    >
      <Text
        className={`${type === "primary" ? "text-neutral-50" : ""} ${
          disabled ? "text-neutral-400" : ""
        }`}
      >
        {label}
      </Text>
    </Pressable>
  );
};

const Questions = () => {
  const [pileOfQuestions, setPileOfQuestions] = useState<PiledQuestion[]>(
    shuffleAndPileQuestions(questions)
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  const goToNextQuestion = () => {
    setCurrentQuestionIndex((prev) => {
      const next = prev + 1;
      if (next === pileOfQuestions.length - 1) {
        setHasReachedEnd(true);
      }
      return next;
    });
  };

  const goToPreviousQuestion = () => {
    setCurrentQuestionIndex((prev) => prev - 1);
  };

  const resetGame = () => {
    setPileOfQuestions(shuffleAndPileQuestions(questions));
    setCurrentQuestionIndex(0);
    setHasReachedEnd(false);
  };

  const handleShowAnswer = () => {
    const newPile = [...pileOfQuestions];
    pileOfQuestions[currentQuestionIndex].isOpened = true;
    setPileOfQuestions(newPile);
  };

  const currentQuestion = pileOfQuestions[currentQuestionIndex];

  const previousQuestion =
    currentQuestionIndex > 0 ? pileOfQuestions[currentQuestionIndex - 1] : null;

  const nextQuestion =
    currentQuestionIndex < pileOfQuestions.length - 1
      ? pileOfQuestions[currentQuestionIndex + 1]
      : null;

  return (
    <View className="flex flex-col items-center p-2">
      <View className="my-8 w-full">
        {currentQuestion && (
          <QuestionBox
            question={currentQuestion}
            showAnswer={currentQuestion.isOpened}
            setShowAnswer={handleShowAnswer}
          />
        )}
      </View>
      <View className="flex flex-row space-x-2 w-full items-center justify-center">
        <MyButton
          label="Föregående"
          onPress={goToPreviousQuestion}
          disabled={!previousQuestion}
        />
        <MyButton
          label="Nästa fråga"
          disabled={!nextQuestion}
          type={hasReachedEnd ? "secondary" : "primary"}
          onPress={goToNextQuestion}
        />
      </View>
      <View className="mt-8">
        {hasReachedEnd && (
          <MyButton label="Nytt spel" type="primary" onPress={resetGame} />
        )}
      </View>
    </View>
  );
};

// TODO:
// lägg knapparna bredvid varandra CHECK
// dom ska vara disabled i rätt lägen CHECK
// ifall man når slutet kanske behöver en reset-knapp. slumpa och börja om
//    kanske ska stå "nytt spel" CHECK

export default Questions;
