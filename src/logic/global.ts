export const checkURLExists = async (url: string, setURL: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    const response = await fetch(url)
    if (response.ok) {
      setURL(true)
    } else {
      setURL(false)
    }
  } catch (error) {
    setURL(false)
  }
}