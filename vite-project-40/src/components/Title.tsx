type Props = {
  text: string,
}

export const Title = ({text}: Props) => {

  return (
    <h1 className="text-3xl font-bold text-center">
      {text}
    </h1>
  )
}