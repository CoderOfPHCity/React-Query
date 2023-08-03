import { useState } from "react";

const useVotesError = () => {
  const [error, setError] = useState(null);

  const handleVoteError = (error) => {
    setError(error);
    console.error("Failed to vote:", error);
  };

  const clearError = () => {
    setError(null);
  };

  return {
    error,
    handleVoteError,
    clearError
  };
};

export default useVotesError;
