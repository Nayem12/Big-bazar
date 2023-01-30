import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


const useSeller = email => {
  const [isSeller, setIsSeller] = useState(false);
  const [isSellerLoading, setSellerLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {

    if (email) {
      fetch(`http://localhost:5000/users/seller/${email}`)
        .then(res => res.json())
        .then(data => {
          setIsSeller(data.isSeller);
          setSellerLoading(false);
        })
    }
  }, [email])
  return [isSeller, isSellerLoading]

}

export default useSeller;