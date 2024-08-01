/* eslint-disable react/react-in-jsx-scope */
export const StarshipList = ({ name, model }: { name: string, model: string }) => {
  return (
    <div key={name} className="bg-zinc-900 p-4">
      <p className="uppercase font-bold">{name}</p>
      <p className="text-sm	">{model}</p>
    </div>
  )
}