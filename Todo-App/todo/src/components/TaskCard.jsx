export default function TaskCard({ task, onDelete, onUpdate }) {
    return (
        <div className="border p-4 rounded shadow">
            <h2 className="font-bold text-lg">
                {task.title}
            </h2>

            <p className="text-gray-600">
                {task.description}
            </p>

            <p className="mt-2">
                Status:
                <span className="ml-2 font-semibold">
                    {task.status}
                </span>
            </p>

            <div className="flex gap-2 mt-3">
                <button
                    onClick={() => onUpdate(task._id)}
                    className="bg-yellow-500 px-2 py-1 rounded"
                >
                    Update
                </button>

                <button
                    onClick={() => onDelete(task._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}