import React from 'react';
import { Control, Controller, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { styles } from './Styles';
import { CloseIcon } from '@public/dummyData/Icons';
import { Title } from '@src/Components/Title';
import { formInputsData, reservationFormValuesType, useReservationForm } from './useFormState';

interface reservationInputProps {
  name:
    | 'guestName'
    | 'phoneNumber'
    | 'reservationTime'
    | 'emailAddress'
    | 'reservationDate'
    | 'numberOfGuests';
  control: Control<reservationFormValuesType, any>;
  type: string;
  rules: any;
  errors: { [x: string]: any };
  Icon?: JSX.Element;
}
const ReservationInput = ({ name, control, type, rules, errors, Icon }: reservationInputProps) => {
  const { t } = useTranslation('reservation');
  const today = new Date().toISOString().split('T')[0];
  const startingDate = type === 'date' ? { min: today } : undefined;

  const inputError = errors && errors[name] && errors[name];
  let errorMessage;
  if (inputError !== undefined) {
    if (inputError.type === 'required') {
      errorMessage = t('reservation.form_validation.required');
    } else {
      errorMessage = t(`reservation.form_validation.${name}.${inputError.type}`);
    }
  }

  return (
    <>
      <div className="mb-5">
        <div className={styles.reservation_input_container}>
          {Icon && <div className={`${styles.reservation_input_icon}`}>{Icon}</div>}
          <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => {
              return (
                <input
                  {...startingDate}
                  placeholder={t(`reservation.form_validation.${name}.placeholder`)}
                  className={`${styles.reservation_input} ${Icon ? 'pr-10' : 'pr-3'}`}
                  {...field}
                  value={field.value}
                  type={type}
                  id={name}
                />
              );
            }}
          />
        </div>

        <p className={`${styles.reservation_input_error_message}`}>
          {errorMessage && errorMessage}
        </p>
      </div>
    </>
  );
};
function ReservationForm({ onClose }: { onClose: () => void }) {
  const { errors, control, reset, formValidation, handleSubmit } = useReservationForm();

  const onSubmit: SubmitHandler<reservationFormValuesType> = (data, event) => {
    event?.preventDefault();
    if (data) {
      alert(JSON.stringify(data, null, 2));
      reset();
      onClose();
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.reservation_form}>
      <div className={`${styles.reservation_form_grid}`}>
        {/*  left col **/}

        <div className={`${styles.reservation_form_column}`}>
          {formInputsData.slice(0, 3).map((item) => {
            return (
              <ReservationInput
                key={item.name}
                type={item.type}
                name={item.name}
                Icon={item.Icon}
                errors={errors}
                control={control}
                rules={formValidation[item.name]}
              />
            );
          })}
        </div>
        {/*  right col **/}
        <div className={`${styles.reservation_form_column}`}>
          {formInputsData.slice(3).map((item) => {
            return (
              <ReservationInput
                key={item.name}
                type={item.type}
                name={item.name}
                Icon={item.Icon}
                errors={errors}
                control={control}
                rules={formValidation[item.name]}
              />
            );
          })}
        </div>
      </div>

      <div className={`${styles.reservation_form_button_container}`}>
        <button type="submit" className={`${styles.reservation_form_button}`}>
          book a table
        </button>
      </div>
    </form>
  );
}
const Reservation = ({ onClose }: { onClose: () => void }) => {
  const { t } = useTranslation('reservation');
  return (
    <section>
      <div className={`${styles.reservation_header_container}`}>
        <div onClick={onClose} className={`${styles.reservation_header_icon}`}>
          <CloseIcon />
        </div>
        <Title color="darkOrange" size="small" titleTransform="uppercase" titleAlignment="center">
          {t('reservation.reservation_title')}
        </Title>
      </div>

      <div className={`${styles.reservation_content}  `}>
        <ReservationForm onClose={onClose} />
      </div>
    </section>
  );
};
export default Reservation;
