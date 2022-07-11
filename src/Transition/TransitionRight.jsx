import { motion } from "framer-motion";
import "./TransitionRight.css";

function TransitionRight(OriginalComponent) {
  return () => (
    <>
      <OriginalComponent />
      <motion.div
        className="slide-in-right"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.div
        className="slide-out-right"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </>
  );
}

export default TransitionRight;
