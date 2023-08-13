// @ts-nocheck
import { useMutation } from "@tanstack/react-query";
import {
  OfferFormContainer,
  OfferFormHeading,
  OfferFormSubmitBtn,
  OfferHoursInput,
  OfferMessageInput,
  OfferPriceAndHoursContainer,
  OfferPriceInput,
} from "./StyledOfferForm";
import useAd, { Ad } from "@/hooks/useAd";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

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
  const { register, reset, handleSubmit } = useForm();

  const { fetchAd } = useAd();

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
      }

      return response.json();
    }),
  );

  const handleSubmitForm = formData => {
    formData.order_id = ad?.id.toString() || "";
    mutate(formData, {
      onSuccess: async () => {
        await fetchAd(ad?.id!);
        reset();
        toast.success("Offer applied successfully");
      },
      onError: () => {
        toast.error("Failed to apply offer");
      },
    });
  };

  return (
    <OfferFormContainer id="offerForm" onSubmit={handleSubmit(handleSubmitForm)}>
      <OfferFormHeading>Apply for this job</OfferFormHeading>
      {/* price,Number of hours,Message */}
      <OfferPriceAndHoursContainer>
        <OfferPriceInput placeholder="50 LE" type="number" name="price" {...register("price")} />
        <OfferHoursInput placeholder="5 Hours" name="hours_number" {...register("hours_number")} />
      </OfferPriceAndHoursContainer>

      <OfferMessageInput placeholder="Message" name="message" {...register("message")} />

      <OfferFormSubmitBtn type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Send"}
      </OfferFormSubmitBtn>
      {isError && <div>{error?.message}</div>}
    </OfferFormContainer>
  );
};

export default OfferForm;
