/** @format */

import React from "react";
import { Header, Wraper, Rools, SingleRool } from "./RulesElements";

export default function Rules() {
  return (
    <Wraper>
      <Header>10 przykazań GRUPY „GALERA”</Header>
      <Rools>
        <SingleRool>
          1. Nie jestem organizatorem spływu i nie biorę odpowiedzialności
          prawnej za zdarzenia losowe oraz zniszczone mienie . Załatwiam nam
          tylko parę spraw, by każdy nie musiał robić tego indywidualnie (
          kajaki, noclegi, …). Z racji mojego doświadczenia mogę jedynie
          doradzać i pomagać w podjęciu decyzji. Każdy uczestnik płynie na
          własną odpowiedzialność i materialnie odpowiada za wypożyczony sprzęt
          (kajak, wiosło , kapok) oraz wspólny sprzęt „GALERY”.
        </SingleRool>
        <SingleRool>
          2. Lubimy zabawy integracyjne (w końcu nie jedziemy na spływ po to,
          aby siedzieć samotnie w namiocie) i dlatego staramy się w nich
          uczestniczyć.
        </SingleRool>
        <SingleRool>
          3. Wszyscy zapewne będą zadowoleni jeśli każda grupa zabierze ze sobą
          jakąś grę lub pokaże nam ciekawą zabawę.
        </SingleRool>
        <SingleRool>
          4. Każdy uczestnik spływu powinien znać taniec belgijski (możliwość
          nauki kroków dostępna
          <a href="https://www.youtube.com/watch?v=HaoeHXMoQFo"> pod tym</a>
          <a href="https://www.youtube.com/watch?v=poH9F74e7B0">
            {" "}
            lub tym
          </a>{" "}
          linkiem. „Nowi” muszą mieć świadomość ,że będą uczestniczyć w chrzcie.
        </SingleRool>
        <SingleRool>
          5. Na trasie zdarzają się różne sytuacje dlatego pamiętajmy żeby sobie
          wzajemnie pomagać.
        </SingleRool>
        <SingleRool>
          6. Koszulka firmowa jest obowiązkowa, nie zapominajmy również o
          tematyce spływu (wstawić ikonę) im ciekawsze przebrania, tym lepiej!
          Za brak przebrania grożą kary.
        </SingleRool>
        <SingleRool>
          7.Miejsca postoju i noclegów pozostawiamy w stanie co najmniej takim w
          jakim je zastaliśmy (a z reguły w lepszym). Wszyscy dbamy o czystość i
          każdy sprząta po sobie chyba, że macie swoje prywatne „Marysie”.
          Saperka i szmata nie parzą.
        </SingleRool>
        <SingleRool>
          8. Nie posiadamy własnych kajaków dlatego wcześniej musimy je
          rezerwować a to wiąże się z wpłaceniem ZALICZI (najczęściej 50zł/os).
          Blokujemy dość dużo kajaków i miejsc noclegowych dlatego zaliczka w
          przypadku rezygnacji - przepada.
        </SingleRool>
        <SingleRool>
          9. Obowiązkiem szefów grup jest by wszyscy uczestnicy jego grupy
          (zwłaszcza „nowi”) znali zasady jakie obowiązują na NASZYCH spływach.
        </SingleRool>
        <SingleRool>
          10. Jeśli komuś zasady, czy charakter spływu nie odpowiadają to
          zwyczajnie niech nie bierze w nim udziału!!
        </SingleRool>
      </Rools>
    </Wraper>
  );
}
