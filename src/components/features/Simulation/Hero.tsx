import PiggyBankImage from '@/assets/images/piggy-bank.png'

export function SimulationHero() {
  return (
    <div className="mb-8 text-center">
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <h1 className="text-foreground text-3x1 sm:text-4x1 font-semibold">
          Vamos planejar seu futuro
        </h1>
        <img src={PiggyBankImage} alt="" aria-hidden="true" className="h-16 w-16 sm:-mt-2" />
      </div>
      <p className="text-muted-foreground text-sm">
        Responda algumas questões para ter insights financeiros personalizados
      </p>
    </div>
  )
}
