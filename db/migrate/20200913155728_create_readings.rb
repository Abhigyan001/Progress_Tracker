class CreateReadings < ActiveRecord::Migration[6.0]
  def change
    create_table :readings do |t|
      t.integer "html"
      t.integer "ruby"
      t.integer "javascript"
      t.integer "rubyonrails"
      t.integer "react"
      t.timestamps
    end
  end
end
