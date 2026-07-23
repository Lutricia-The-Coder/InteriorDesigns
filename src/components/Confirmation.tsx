type Props = {
  message: string;
  type: "success" | "error";
};

export default function Confirmation({ message, type }: Props) {
  return (
    <div className={`confirmation ${type}`}>
      {message}
    </div>
  );
}