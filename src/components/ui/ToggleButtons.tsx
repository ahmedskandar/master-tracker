
type Props = {}

const ToggleButtons = (props: Props) => {
  return (
    <div className="flex justify-center">
        <button className="toggle-button text-white border-r rounded-l-md border-r-gray-400">Todo</button>
        <button className="toggle-button text-white rounded-r-md">Category</button>
    </div>
  )
}

export default ToggleButtons