FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    email { Faker::Internet.email }
    password { 'somepassword' }
    password_confirmation { 'somepassword' }
    units { 18_000 }
    target { 5 }
  end
end
