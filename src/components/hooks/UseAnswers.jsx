import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswers(videoId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchAnswers() {
      // database related work
      const db = getDatabase();
      const answersRef = ref(db, "answers/" + videoId + "/questions");
      const answersQuery = query(answersRef, orderByKey());
      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(answersQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setAnswers((prevAnswers) => {
            return [...prevAnswers, ...Object.values(snapshot.val())];
          });
        }
      } catch (e) {
        console.log(e);
        setLoading(false);
        setError(true);
      }
    }
    fetchAnswers();
  }, [videoId]);

  return {
    loading,
    error,
    answers,
  };
}
