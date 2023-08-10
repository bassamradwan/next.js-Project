// @ts-nocheck
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  OfferFormContainer,
  OfferFormHeading,
  OfferPriceAndHoursContainer,
  OfferPriceInput,
  OfferHoursInput,
  OfferMessageInput,
  OfferFormSubmitBtn,
} from "./StyledOfferForm";
import useAd, { Ad } from "@/hooks/useAd";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface OfferFormProps {
  ad: Ad | undefined;
}

interface OfferFormData {
  price: string;
  hours_number: string;
  message: string;
  order_id: string;
}

const OfferForm = ({ ad }: OfferFormProps) => {
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState<OfferFormData>({
    price: "",
    hours_number: "",
    message: "",
    order_id: ad?.id.toString() || "",
  });
  useEffect(() => {
    setFormData(prevFormData => ({ ...prevFormData, order_id: ad?.id.toString() || "" }));
  }, [ad]);

  console.log("formData", formData);
  console.log("ad", ad);
  const token = Cookies.get("medtich-token");

  const { mutate, isLoading, isError, error } = useMutation((formData: OfferFormData) =>
    fetch(`${process.env.MAKE_OFFER_URL}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then(response => {
      if (!response.ok) {
        throw new Error("Failed to apply offer");
        // toastify error
      }

      return response.json();
    }),
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate(formData, {
      onSuccess: () => {
        toast.success("Offer applied successfully");
        // invalidate the query ad and refetch it to get the new data
        // [ad, queryparams]
        // invalidate with any query params
        // refresh the paga
        window.location.reload();
      },
      onError: () => {
        toast.error("Failed to apply offer");
      },
    });
  };

  return (
    <OfferFormContainer id="offerForm" onSubmit={handleSubmit}>
      <OfferFormHeading>Apply for this job</OfferFormHeading>
      {/* price,Number of hours,Message */}
      <OfferPriceAndHoursContainer>
        <OfferPriceInput
          placeholder="50 LE"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
        />
        <OfferHoursInput
          placeholder="5 Hours"
          name="hours_number"
          value={formData.hours_number}
          onChange={handleInputChange}
        />
      </OfferPriceAndHoursContainer>
      <OfferMessageInput
        placeholder="Message"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
      />
      <input type="hidden" name="order_id" value={formData.order_id} />
      <OfferFormSubmitBtn type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Send"}
      </OfferFormSubmitBtn>
      {isError && <div>{error?.message}</div>}
    </OfferFormContainer>
  );
};

export default OfferForm;
