import Button from "../useArray/Button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./Modal";
export default function ModalComponent() {
  return (
    <div className="flex items-center justify-center flex-col gap-4 h-[100vh]">
      <Modal>
        <ModalTrigger>
          <Button className="bg-black text-white">Modal</Button>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              delectus debitis ad voluptate voluptas. Sapiente ex illo quam
              impedit. Perspiciatis soluta, aperiam officia eius assumenda harum
              saepe dicta dolore amet.
            </p>
          </ModalContent>
          <ModalFooter>
            <p>Footer!!!</p>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
