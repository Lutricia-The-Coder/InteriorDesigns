type Props = {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ButtonConfirm({
  title,
  message,
  onConfirm,
  onCancel,
}: Props) {
  return (
    <div className="modal">
      <div className="confirm-modal">

        <h2>{title}</h2>

        <p>{message}</p>

        <div className="buttons">

          <button
            className="danger-btn"
            onClick={onConfirm}
          >
            Delete
          </button>

          <button
            className="cancel-btn"
            onClick={onCancel}
          >
            Cancel
          </button>

        </div>

      </div>
    </div>
  );
}