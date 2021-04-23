FactoryBot.define do
  factory :reading do
    html { Faker::Number.between(from: 1, to: 10) }
    css { Faker::Number.between(from: 1, to: 10) }
    ruby { Faker::Number.between(from: 1, to: 10) }
    rubyonrails { Faker::Number.between(from: 1, to: 10) }
    javascript { Faker::Number.between(from: 1, to: 10) }
    react { Faker::Number.between(from: 1, to: 10) }
    progress { Faker::Number.between(from: 1, to: 10) }
    available { Faker::Number.between(from: 1, to: 10) }
    left { Faker::Number.between(from: 1, to: 10) }
    user_id { nil }
  end
end
