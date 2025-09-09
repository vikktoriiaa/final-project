import { type FC } from "react";
import { Button } from "./common/Button";
import { useNavigate } from "react-router-dom";

export const Error404: FC = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  return (
    <div className="mx-auto flex flex-col items-center justify-center h-screen">
      <Button
        text="to Home"
        background="bg-[#FFD050]"
        color="text-black"
        func={navigateToHome}
      />
    </div>
  );
};
