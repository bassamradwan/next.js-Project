import { useRouter } from "next/router";

// import { useLocale, useTranslations } from "next-intl";
import { useTranslations } from "next-intl";

import { ChangeEvent, useTransition, useCallback, useRef } from "react";

import styled from "styled-components";
const StyledSelect = styled.select`
  font-family: "Bahij", sans-serif;
  font-size:1em;
  font-weight:300;
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
    background-color: transparent;
  }
`;

const Arrow = styled.span`
  cursor: pointer;
`;

export default function LocaleSwitcher() {
  const t = useTranslations();
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const { locale } = useRouter();
  const pathname = router.pathname;

  function onSelectChange(event: { target: { value: any } }) {
    startTransition(() => {
      router.push(pathname, `/${event.target.value}${router.asPath}`, {
        locale: event.target.value,
      });
    });
    
  }
  return (
    <>
      <StyledSelect value={locale} disabled={isPending} onChange={onSelectChange} dir="rtl">
        <option value="ar">{t("LocaleSwitcher.locale.ar")}</option>
        <option value="en">{t("LocaleSwitcher.locale.en")}</option>
      </StyledSelect>
    </>
  );
}
