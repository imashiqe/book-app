import TextAnimation from "react-text-animations";

const AnimatedText = () => {
    return (
        <TextAnimation.Slide target="Merciful" text={['Gracious', 'Peace', 'Knowing']}>
            Allah is The Merciful
        </TextAnimation.Slide>
    )
}

export default AnimatedText;