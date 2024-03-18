import FirstComponent, { FifthConponent } from "./FirstComponent";
import ForthComponent from "./ForthComponent";
import LearningJavaScript from "./LearningJavaScript";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";

export default function LearningComponents(){
    return(
        <div className="LearningComponent">
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>
        <ForthComponent/>
        <FifthConponent/>
        <LearningJavaScript/>
        </div>
        

    )
}