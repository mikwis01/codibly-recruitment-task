import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { AiOutlineClose } from "react-icons/ai"

export const Modal = () => {
  const { appState, handleResetState } = useContext(AppContext)
  const { id, name, year, color, pantone_value } = appState.modalItem

  return (
    <div className="absolute z-50 h-full w-full flex items-center justify-center backdrop-blur-md">
      <div className="relative  w-5/6 py-20 max-w-xs text-center bg-graySemiLight text-white gap-5 grid place-items-center rounded-lg drop-shadow-lg transition-opacity">
        <button
          onClick={handleResetState}
          className="bg-red-500 h-8 w-8 absolute top-5 left-5 flex items-center justify-center rounded-md hover:scale-110 transition-all">
          <AiOutlineClose size={20} />
        </button>
        <h4 className="font-bold">Product info</h4>
        <table>
          <tbody>
            <tr>
              <td className="border p-2 font-bold">id</td>
              <td className="border p-2">{id}</td>
            </tr>

            <tr>
              <td className="border p-2">name</td>
              <td className="border p-2">{name}</td>
            </tr>

            <tr>
              <td className="border p-2">year</td>
              <td className="border p-2">{year}</td>
            </tr>

            <tr>
              <td className="border p-2">color</td>
              <td className="border p-2">{color}</td>
            </tr>

            <tr>
              <td className="border p-2">pantone_value</td>
              <td className="border p-2">{pantone_value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
